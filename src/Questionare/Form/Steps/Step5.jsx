import React from "react";

//components
import Upload from "../../../Global/Upload/Upload";
import DivMotion from "../util/MotionDiv";
import Fieldset from "../../Fieldset/Fieldset";
import Buttons from "../Buttons/Buttons";
import ImageZoom from "../../../Global/ImageZoom/ImageZoom";

const Step5 = (props) => {
  const { onNext, onPrevious, formState, setFormState } = props;
  return (
    <DivMotion>
      <Fieldset legend="Dodaj projekt graficzny strony">
        <div className="questionare__galleryDiscrition">
          Proszę o dodanie zdjęć pojedynczo, pamiętając żeby każdorazowo kliknąć
          przycisk "Dodaj Zdjęcie"
        </div>
        <Upload photos={formState.photos} setPhotos={setFormState} isGallery />
        <div className="questionare__gallery">
          {formState.photos?.length
            ? formState.photos.map((item) => (
                <ImageZoom url={item} key={item} />
              ))
            : null}
        </div>
        <Buttons
          onNext={onNext}
          onPrevious={onPrevious}
          isLastStep
          isFirstStep
        />
      </Fieldset>
    </DivMotion>
  );
};

export default Step5;
