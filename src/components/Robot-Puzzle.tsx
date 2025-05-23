import { useState } from "react";
import styles from "./Robot-Puzzle.module.css";

interface PieceInterface {
  image: string;
  position: number;
  isFocus: boolean;
}
export const PuzzleRobot = () => {
  const movablePositions = {
    1: [2, 4],
    2: [3, 1, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 6, 8, 4],
    6: [3, 5, 9],
    7: [4, 8],
    8: [9, 5, 7],
    9: [6, 8],
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [puzzlePieces, setPuzzlePieces] = useState([
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 2.png",
      position: 1,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 1.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 1.png",
      position: 2,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 2.png",
    },
    {
      isFocus: false,
      image: "",
      position: 3,
      expectedImage: "",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 7.png",
      position: 4,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 4.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 9.png",
      position: 5,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 5.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 8.png",
      position: 6,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 6.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 4.png",
      position: 7,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 7.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 6.png",
      position: 8,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 8.png",
    },
    {
      isFocus: false,
      image: "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 5.png",
      position: 9,
      expectedImage:
        "src/assets/un_robot_entrain_de_faire_du_code_sur_un_pc 9.png",
    },
  ]);

  function onClick(piece: PieceInterface) {
    if (
      !piece.image &&
      puzzlePieces.filter((piece) => piece.isFocus === true).length < 1
    ) {
      return;
    } else {
      if (
        !piece.image &&
        puzzlePieces.filter((piece) => piece.isFocus === true)
      ) {
        const focusedPiece = puzzlePieces.find(
          (piece) => piece.isFocus === true
        ) as PieceInterface;
        if (movablePositions[focusedPiece.position].includes(piece.position)) {
          const focusedPieceImage = focusedPiece.image as string;
          const duplicatedArray: PieceInterface[] = [...puzzlePieces];
          duplicatedArray.map((duplicatedPiece: PieceInterface) => {
            if (duplicatedPiece.position === piece.position) {
              duplicatedPiece.image = focusedPieceImage;
            }
            duplicatedPiece.isFocus = false;
            if (duplicatedPiece.position === focusedPiece.position) {
              duplicatedPiece.image = "";
            }
          });
          setPuzzlePieces(duplicatedArray);
        }
      } else {
        piece.isFocus = true;
        const duplicatedArray: PieceInterface[] = [...puzzlePieces];
        duplicatedArray.map((duplicatedPiece: PieceInterface) => {
          duplicatedPiece.position === piece.position
            ? (duplicatedPiece.isFocus = true)
            : (duplicatedPiece.isFocus = false);
        });
        setPuzzlePieces(duplicatedArray);
      }
      if (
        puzzlePieces.filter((piece) => piece.image !== piece.expectedImage)
          .length === 0
      ) {
        setSuccessMessage("Well played !");
      } else setSuccessMessage("");
    }
  }
  return (
    <>
      <section className={styles.section}>
        {puzzlePieces.map((piece) => {
          return (
            <div
              onClick={() => onClick(piece)}
              key={piece.position}
              className={piece.isFocus ? styles.focus : ""}
            >
              {piece.image ? <img src={piece.image} alt="Robot H/G" /> : ""}
            </div>
          );
        })}
      </section>
      <p className={styles.message}>{successMessage}</p>
    </>
  );
};
export default PuzzleRobot;
