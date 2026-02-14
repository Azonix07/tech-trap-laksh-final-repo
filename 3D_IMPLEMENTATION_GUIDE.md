# 3D Motherboard Assembly - Implementation Guide

## ✅ What's Been Set Up

The website now has full 3D motherboard assembly support using Three.js! The first question of Room 2 will display a 3D interactive scene.

---

## 📁 File Structure Created

```
public/
  └── models/           ← Place your 3D models here
      └── README.md     ← Model requirements guide
```

---

## 📦 Required 3D Model Files

Place these 5 files in `public/models/` folder:

### **File Names (EXACT):**
1. **motherboard.glb** - Main motherboard base
2. **ram.glb** - RAM memory stick  
3. **ssd.glb** - SSD storage drive
4. **gpu.glb** - Graphics card
5. **cmos.glb** - CMOS battery

### **Model Requirements:**

**Format:**
- Use **.glb** format (GLTF binary)
- GLB is preferred over GLTF because textures are embedded

**Size:**
- Keep each model under 5MB
- Compress textures if needed
- Remove unnecessary geometry

**Positioning:**
- Center each model at origin (0, 0, 0) in your 3D software
- Orient models facing forward (+Z axis)
- Scale appropriately (will be adjusted in code if needed)

**Textures:**
- Embed all textures in the GLB file
- Use compressed formats (JPEG for diffuse, PNG for alpha)
- Recommended texture size: 1024x1024 or 2048x2048 max

---

## 🎨 How to Create/Export GLB Files

### **Using Blender (Free):**

1. **Import/Create your 3D model**
2. **Apply all transformations:** Object → Apply → All Transforms
3. **Center to origin:** Object → Set Origin → Origin to Geometry
4. **Export as GLB:**
   - File → Export → glTF 2.0 (.glb/.gltf)
   - Format: **glTF Binary (.glb)**
   - Include: Checked
     - ✅ Normals
     - ✅ UVs  
     - ✅ Materials
   - Compression: **Yes**
   - Click "Export glTF 2.0"

### **Using Other Software:**
- **3ds Max**: Babylon.js Exporter → Export to GLB
- **Maya**: Use glTF exporter plugin
- **Online**: Use https://products.aspose.app/3d/conversion (convert FBX/OBJ to GLB)

---

## 🔍 Testing Your Models

Before adding to the project, test your GLB files:

**Online Viewer:**
- https://gltf-viewer.donmccurdy.com/
- Drag and drop your .glb file
- Check: size, textures, orientation

**Model Checklist:**
- [ ] File size < 5MB
- [ ] Textures visible
- [ ] Model centered
- [ ] No missing geometry
- [ ] Reasonable polygon count (< 50k faces)

---

## 🚀 How It Works

### **Current Setup:**

**Room 2, Question 1:**
- Question type: `is3D: true`
- Displays 3D canvas with Three.js WebGL renderer
- Loads motherboard.glb as base
- Loads 4 components (RAM, SSD, GPU, CMOS)
- Components are draggable in 3D space
- Snap to correct positions when placed within 0.5 units

### **Controls:**
- **Mouse Drag**: Rotate camera (OrbitControls)
- **Mouse Wheel**: Zoom in/out
- **Click & Drag Component**: Move it on the board
- **Reset View Button**: Return camera to default position
- **Auto-Rotate Button**: Toggle automatic rotation

### **Validation:**
- Components must be placed in correct slots
- Snaps to position when close enough
- Validates on "Check Assembly" button click
- Shows correct/incorrect feedback

---

## 📝 Component Positions (Current Config)

Defined in `questions.js`:

```javascript
components: [
    { id: 'ram', position: { x: -2, y: 0.5, z: 1 } },
    { id: 'ssd', position: { x: 1, y: 0.5, z: -1 } },
    { id: 'gpu', position: { x: 0, y: 0.5, z: 2 } },
    { id: 'cmos', position: { x: 2, y: 0.5, z: 0 } }
]

dropZones: [
    { id: 'ram-slot', position: { x: -2, y: 0.1, z: 1 }, accepts: 'ram' },
    { id: 'ssd-slot', position: { x: 1, y: 0.1, z: -1 }, accepts: 'ssd' },
    { id: 'gpu-slot', position: { x: 0, y: 0.1, z: 2 }, accepts: 'gpu' },
    { id: 'cmos-slot', position: { x: 2, y: 0.1, z: 0 }, accepts: 'cmos' }
]
```

**Adjust these positions** in `questions.js` after you add your models to match actual slot locations on your motherboard model.

---

## 🛠️ Customization Options

### **Change Model Scales:**
In `index.html`, find `init3DScene()`:
```javascript
compMesh.scale.set(0.8, 0.8, 0.8); // Adjust this for each component
```

### **Change Lighting:**
Modify in `init3DScene()`:
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Brightness
const cyanLight = new THREE.PointLight(0x00f0ff, 0.5, 20); // Color, intensity, distance
```

### **Change Camera Position:**
```javascript
camera3D.position.set(0, 5, 8); // X, Y, Z
```

### **Change Snap Distance:**
In `onMouseUp3D()`:
```javascript
if (distance < 0.5) { // Increase for easier snapping
```

---

## 🎯 Next Steps

1. **Add Your 5 GLB Files** to `public/models/` folder
2. **Test in Browser:**
   - Start server: `node server.js`
   - Open: http://localhost:3000
   - Login as participant
   - Admin starts event
   - Navigate to Room 2, Question 1
3. **Adjust Positions** in `questions.js` if components don't align
4. **Fine-tune Scales** in `init3DScene()` if models are too big/small

---

## 🐛 Troubleshooting

**"ERROR LOADING MODELS" appears:**
- Check file names are EXACT (case-sensitive)
- Verify files are in `public/models/`
- Check browser console (F12) for specific errors
- Ensure GLB files are valid (test in online viewer)

**Models load but look wrong:**
- Adjust `scale.set()` values
- Check model orientation in Blender
- Re-export with correct axis settings

**Can't drag components:**
- Check browser console for JavaScript errors
- Ensure models have proper userData
- Verify raycaster is working (check intersects)

**Components don't snap:**
- Adjust snap distance (increase from 0.5)
- Check dropZone positions match actual slots
- Use browser console: `console.log(placedComponents3D)`

---

## 💡 Pro Tips

1. **Start Simple**: Use basic cube/cylinder shapes first to test the system
2. **Low Poly First**: Start with low-poly models, optimize later
3. **Test Individually**: Load one model at a time to isolate issues
4. **Use Baked Textures**: Pre-bake lighting into textures for better performance
5. **Optimize Materials**: Use fewer materials/textures per model

---

## 📚 Resources

**Three.js Docs:**
- https://threejs.org/docs/

**GLB/GLTF Info:**
- https://www.khronos.org/gltf/

**Free 3D Models:**
- https://sketchfab.com (search "motherboard")
- https://www.cgtrader.com
- https://free3d.com

**Blender Tutorials:**
- https://www.youtube.com/results?search_query=blender+gltf+export

---

## ✅ Summary

Your website is now ready for 3D models! Just add the 5 GLB files and you'll have a fully interactive 3D motherboard assembly challenge.

**Current Status:**
- ✅ Three.js installed and imported
- ✅ 3D scene setup complete
- ✅ Drag-and-drop 3D interaction ready
- ✅ OrbitControls for camera movement
- ✅ GLTFLoader configured
- ✅ Validation logic implemented
- ✅ UI controls (Reset, Auto-Rotate)
- ⏳ **Waiting for:** Your 5 GLB model files

**Once you add the models, the 3D motherboard assembly will work immediately!**
