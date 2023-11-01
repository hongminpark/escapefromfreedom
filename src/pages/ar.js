import Head from "next/head";

export default function ModelViewerPage() {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>
      <div>
        <model-viewer
          src="/cylinder_table_materials_jpg.glb"
          ar
          ar-scale="auto"
          camera-controls
          alt="A 3D model of furniture"
          style={{ width: "100%", height: "400px" }}
        ></model-viewer>
      </div>
    </>
  );
}
