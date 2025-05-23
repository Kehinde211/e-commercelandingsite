import "./index.css";

const GridContent = () => {
    return (
        <div 
        style={{ display: "grid", 
        marginTop: "20px", 
        marginLeft: "200px", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gridTemplateRows: "repeat(4, 200px)", 
        gap: "20px", 
        marginBottom: "10px",
         }} className="thegrid">
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
            <img src="public/images/enviraalbums.jpg" alt="BreadCrumbs" style={{  }}/>
            <p style={{ marginTop: "15px"}}>Albums Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
            <img src="public/images/lightboxsuspervise.jpg" />
            <p style={{ marginTop: "15px"}}>Lightbox Gallery Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
            <img src="public/images/masonrydemo.jpg" />
            <p style={{ marginTop: "15px"}}>Masonry Gallery Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
            <img src="public/images/lazyloaddesktop.jpg" />
            <p style={{ marginTop: "15px"}}>Mosaic Gallery Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/fcdemodesktop.jpg" />
            <p style={{ marginTop: "15px"}}>Gallery Themes Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/envirawoocommerce.jpg" />
            <p style={{ marginTop: "15px"}}>Videos Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/mobiledemo.png" />
            <p style={{ marginTop: "15px"}}>Mobile Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/proofingdemo.jpg" />
            <p style={{ marginTop: "15px"}}>Thumbnail Gallery Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/printingdemo.jpg" />
            <p style={{ marginTop: "15px"}}>Featured Content Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/lightboxtransitions.jpg" />
            <p style={{ marginTop: "15px"}}>Fullscreen Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/enviravideo.jpg" />
            <p style={{ marginTop: "15px"}}>Slideshow Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/masonrydemodesktop.jpg" />
            <p style={{ marginTop: "15px"}}>Pagination Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/fcdemodesktop.jpg" />
            <p style={{ marginTop: "15px"}}>Deeplinking Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/instagramdemodekstop.jpg" />
            <p style={{ marginTop: "15px"}}>Instagram Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/socialdemo.jpg" />
            <p style={{ marginTop: "15px"}}>Social Sharing Demo</p>
        </div>
        <div style={{ borderRadius: "20px", backgroundColor: "#f9f9f9", }}>
        <img src="public/images/watermarkdemo.jpg" />
            <p style={{ marginTop: "15px"}}>WooCommerce Demo</p>
        </div>
        </div>
    )
}

export default GridContent;