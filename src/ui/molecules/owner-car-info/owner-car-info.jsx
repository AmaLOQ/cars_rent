import React from "react";
import { StarsRating } from "../../atoms/stars-rating/stars-rating";
import { DottedText } from "../../atoms/dotted-text/dotted-text";
import { OwnerCarAvatar, OwnerCarName, OwnerCarStatus, OwnerCarModel, OwnerCarStarsContainer, OwnerCarFeedbackContainer} from "./owner-car-info-styles";

export const OwnerCar = ({...value}, {...props}) =>
	<>
		<OwnerCarAvatar>{value.avatar}</OwnerCarAvatar><OwnerCarName>{value.name}</OwnerCarName><OwnerCarStatus><DottedText text={value.status}/></OwnerCarStatus>
		<OwnerCarModel>{value.model}</OwnerCarModel>
		<OwnerCarStarsContainer></OwnerCarStarsContainer><OwnerCarFeedbackContainer>{value.feedbacks} отзывов</OwnerCarFeedbackContainer>
	</>
