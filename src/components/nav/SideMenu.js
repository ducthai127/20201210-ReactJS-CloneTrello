import { Drawer, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import colors from "../../utils/color";
import { getImages } from "../../utils/ImageApi";

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: "400px",
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
  optionContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
  box: {
    width: "45%",
    height: "90px",
    backgroundColor: "blue",
    borderRadius: "9px",
    marginBottom: theme.spacing(2),
  },
}));

export default function SideMenu({
  openSideMenu,
  setOpenSideMenu,
  setNewBackgroundImage,
}) {
  const classes = useStyle();
  const [openOptionImage, setOpenOptionImage] = useState(false);
  const [openOptionColor, setOpenOptionColor] = useState(false);
  const [images, setImages] = useState([]);

  const getListOfImage = async () => {
    const listOfImages = await getImages();
    setImages(listOfImages);
  };

  useEffect(() => {
    getListOfImage();
  }, []);

  return (
    <div>
      <Drawer
        open={openSideMenu}
        anchor="right"
        onClose={() => setOpenSideMenu(!openSideMenu)}
      >
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url(https://lacf.ca/sites/default/files/images/homepage/banners/P14%20-%20brightcropped%20for%20landing%20page_%20Bridge%20in%20Gablenz%2C%20Germany%2C%20Photo%20by%20Martin%20Damboldt%20from%20Pexels.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => setOpenOptionImage(true)}
            ></div>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionColor(true);
                setOpenOptionImage(false);
              }}
            ></div>
          </div>

          {openOptionImage ? (
            <Grow in={openOptionImage}>
              <div className={classes.optionContainer}>
                {images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundImage: `url(
                          ${image.thumb}  
                        )`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      onClick={() => setNewBackgroundImage(image.full)}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          ) : (
            <Grow in={openOptionColor}>
              <div className={classes.optionContainer}>
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => setNewBackgroundImage(color)}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          )}
        </div>
      </Drawer>
    </div>
  );
}
