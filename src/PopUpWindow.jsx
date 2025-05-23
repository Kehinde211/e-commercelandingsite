import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const PopUpWindow = () => {
    const [secCounter, setSecCounter] = useState(59);
    const [dayCounter, setDayCounter] = useState(6);
    const [hourCounter, setHourCounter] = useState(24);
    const [minuteCounter, setMinCounter] = useState(59);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    function handleClose() {
        setIsVisible(false);
    }

    function handleGetStarted() {
        console.log("Get Started clicked!");
    }

    function handleSeeFeatures() {
        console.log("See All Features clicked!");
    }

    // Navigation component that appears after scroll
    const ScrolledNavigation = () => {
        return (
            <div style={{ 
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                zIndex: 1000,
                padding: "15px 20px"
            }}>
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    {/* Logo placeholder */}
                    <div style={{ 
                        width: "40px", 
                        height: "40px", 
                        backgroundColor: "#00ac53", 
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold"
                    }}>
                        E
                    </div>
                    
                    {/* Message */}
                    <div style={{ flex: 1, margin: "0 20px" }}>
                        <p style={{ 
                            margin: "0", 
                            fontSize: "14px", 
                            color: "#333",
                            textAlign: "center"
                        }}>
                            Create Beautiful Responsive Photo & Video Galleries for your site in minutes
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button 
                            style={{ 
                                backgroundColor: "#00ac53",
                                color: "white",
                                padding: "8px 16px",
                                borderRadius: "5px",
                                border: "none",
                                fontSize: "14px",
                                cursor: "pointer"
                            }}
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </button>
                        <button 
                            style={{ 
                                backgroundColor: "white",
                                color: "#333",
                                padding: "8px 16px",
                                borderRadius: "5px",
                                border: "1px solid #ddd",
                                fontSize: "14px",
                                cursor: "pointer"
                            }}
                            onClick={handleSeeFeatures}
                        >
                            See All Features
                        </button>
                    </div>
                    
                    {/* Close button */}
                    <IconButton
                        onClick={handleClose}
                        style={{ marginLeft: "10px" }}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
        );
    };

    // Scroll detection effect
    useEffect(() => {
        const handleScrollEffect = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 100); // Transform after scrolling 100px
        };

        window.addEventListener('scroll', handleScrollEffect);
        return () => window.removeEventListener('scroll', handleScrollEffect);
    }, []);

    // Countdown timer effect
    useEffect(() => {
        if (!isVisible) return;

        const timer = setInterval(() => {
            setSecCounter(prevSec => {
                if (prevSec > 0) return prevSec - 1;
                
                setMinCounter(prevMin => {
                    if (prevMin > 0) return prevMin - 1;
                    
                    setHourCounter(prevHour => {
                        if (prevHour > 0) return prevHour - 1;
                        
                        setDayCounter(prevDay => {
                            if (prevDay > 0) return prevDay - 1;
                            return 0;
                        });
                        return 23;
                    });
                    return 59;
                });
                return 59;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isVisible]);

    // Don't render anything if popup is closed
    if (!isVisible) return null;

    // Render scrolled navigation or original popup
    if (isScrolled) {
        return <ScrolledNavigation />;
    }

    // Original countdown popup
    return (
        <div style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            border: "2px solid #cefc00",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            zIndex: 1000,
            maxWidth: "600px",
            width: "90%"
        }}>
            {/* Close Button */}
            <IconButton
                onClick={handleClose}
                style={{ 
                    position: "absolute", 
                    top: "10px", 
                    right: "10px",
                    color: "#666"
                }}
                aria-label="close"
            >
                <CloseIcon />
            </IconButton>

            {/* Main Content */}
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                gap: "15px",
                marginTop: "10px"
            }}>
                {/* Header Message */}
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ 
                        margin: "0", 
                        fontSize: "18px", 
                        fontWeight: "bold",
                        color: "#333"
                    }}>
                        🎉 Limited Time Offer! 🎉
                    </h3>
                    <p style={{ 
                        margin: "5px 0 0 0", 
                        fontSize: "14px", 
                        color: "#666" 
                    }}>
                        This is the day that the Lord has blessed
                    </p>
                </div>

                {/* Countdown Timer */}
                <div style={{ 
                    display: "flex", 
                    gap: "15px", 
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ 
                            fontSize: "24px", 
                            fontWeight: "bold", 
                            margin: "0",
                            color: "#333"
                        }}>
                            {dayCounter}
                        </p>
                        <span style={{ fontSize: "12px", color: "#666" }}>Days</span>
                    </div>
                    <span style={{ fontSize: "20px", color: "#666" }}>:</span>
                    
                    <div style={{ textAlign: "center" }}>
                        <p style={{ 
                            fontSize: "24px", 
                            fontWeight: "bold", 
                            margin: "0",
                            color: "#333"
                        }}>
                            {hourCounter}
                        </p>
                        <span style={{ fontSize: "12px", color: "#666" }}>Hours</span>
                    </div>
                    <span style={{ fontSize: "20px", color: "#666" }}>:</span>
                    
                    <div style={{ textAlign: "center" }}>
                        <p style={{ 
                            fontSize: "24px", 
                            fontWeight: "bold", 
                            margin: "0",
                            color: "#333"
                        }}>
                            {minuteCounter}
                        </p>
                        <span style={{ fontSize: "12px", color: "#666" }}>Minutes</span>
                    </div>
                    <span style={{ fontSize: "20px", color: "#666" }}>:</span>
                    
                    <div style={{ textAlign: "center" }}>
                        <p style={{ 
                            fontSize: "24px", 
                            fontWeight: "bold", 
                            margin: "0",
                            color: "#333"
                        }}>
                            {secCounter}
                        </p>
                        <span style={{ fontSize: "12px", color: "#666" }}>Seconds</span>
                    </div>
                </div>

                {/* Call to Action Button */}
                <button 
                    style={{ 
                        backgroundColor: "#cefc00", 
                        color: "black", 
                        height: "55px",
                        padding: "0 30px",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0 2px 10px rgba(206, 252, 0, 0.3)",
                        transition: "transform 0.2s ease"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                >
                    💰 Save 50% NOW!
                </button>
            </div>
        </div>
    );
};

export default PopUpWindow;