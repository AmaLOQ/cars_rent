import React from "react";
import { StarsRating } from "../../atoms/stars-rating/stars-rating";
import { DottedText } from "../../atoms/dotted-text/dotted-text";
import { OwnerCarAvatar, OwnerCarName, OwnerCarStatus, OwnerCarModel, OwnerCarStarsContainer, OwnerCarFeedbackContainer, StyledRating} from "./owner-car-info-styles";


export const OwnerCar = ({...value}, {...props}) =>
	<>
		<OwnerCarAvatar>{value.avatar}</OwnerCarAvatar><OwnerCarName>{value.name}</OwnerCarName><OwnerCarStatus><DottedText text={value.status}/></OwnerCarStatus>
		<OwnerCarModel>{value.model}</OwnerCarModel>
		<OwnerCarStarsContainer><StyledRating name="size-large" defaultValue={4.5} precision={0.5} size="large" /></OwnerCarStarsContainer><OwnerCarFeedbackContainer>{value.feedbacks} отзывы</OwnerCarFeedbackContainer>
	</>
