import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAssets } from "../../hooks/useAssets";
import styles from "./Create.module.css";
import Input from "@repo/design-system/web/components/Input";
import { useAssetFormStore } from "../../hooks/assetFormStore";
import { useAssetsStore } from "../../store";

const assetCategories = ["Electronics", "Furniture", "Tools", "Office Supplies", "Vehicles", "Real Estate", "Software", "Other"];
const assetPriorities = ["Low", "Medium", "High", "Critical"];
const assetStatuses = ["Active", "In Storage", "Broken", "In Repair", "Disposed", "Sold"];

export default function Create({ isEditing = false }) {
  const { id } = useParams();
    const navigate = useNavigate();
    const { getAsset } = useAssets();
  const addAsset = useAssetsStore((state) => state.addAsset);
  const updateAsset = useAssetsStore((state) => state.updateAsset);
    
  const { formData, setFormData, resetForm, setTags } = useAssetFormStore();
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (isEditing && id) {
      const asset = getAsset(id);
      if (asset) {
        setFormData(asset);
      } else {
        navigate("/assets");
      }
    } else {
      resetForm();
    }
  }, [id, isEditing]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleNumberChange = (e: any) => {
    const { name, value } = e.target;
    const parsed = parseFloat(value);
    setFormData({ [name]: isNaN(parsed) ? 0 : parsed });
  };

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !formData.tags.includes(trimmed)) {
      setTags([...formData.tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(formData.tags.filter((t) => t !== tag));
  };

    const handleSubmit = (e: any) => {
      console.log({formData})
    e.preventDefault();
      if (!formData.item || !formData.brand) {
        console.log("Please fill in all required fields")
      return;
    }

    if (isEditing && id) {
        updateAsset(id, formData);
        resetForm(); // <--- IMPORTANTE
        navigate(`/assets/${id}`);
      } else {
        addAsset(formData);
        resetForm(); // <--- IMPORTANTE
        navigate("/assets");
      }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>{isEditing ? "Edit Asset" : "Add Asset"}</h1>

      <label>
        Item Name*
        <Input type="text" name="item" value={formData.item} onChange={handleChange} required />
      </label>

      <label>
        Brand*
        <Input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
      </label>

      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {assetCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label>
        Priority
        <select name="priority" value={formData.priority} onChange={handleChange}>
          {assetPriorities.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>

      <label>
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
          {assetStatuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label>
        Estimated Cost ($)
        <Input type="number" name="estimated_cost" value={formData.estimated_cost} onChange={handleNumberChange} />
      </label>

      <label>
        Real Cost ($)
        <Input type="number" name="real_cost" value={formData.real_cost} onChange={handleNumberChange} />
      </label>

      <label>
        Acquisition Date
        <Input type="date" name="acquisition_date" value={formData.acquisition_date} onChange={handleChange} />
      </label>

      <label>
        Primary Use
        <Input type="text" name="primary_use" value={formData.primary_use} onChange={handleChange} />
      </label>

      <label>
        Link
        <Input type="url" name="link" value={formData.link} onChange={handleChange} />
      </label>

      <label>
        Notes
        <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} />
      </label>

      <label>
        Tags
        <div className={styles.tagInput}>
          <Input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
          />
          <button type="button" onClick={handleAddTag}>Add Tag</button>
        </div>
        <div className={styles.tags}>
          {formData.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag} <button type="button" onClick={() => handleRemoveTag(tag)}>x</button>
            </span>
          ))}
        </div>
      </label>

      <button type="submit">{isEditing ? "Update Asset" : "Create Asset"}</button>
    </form>
  );
}
