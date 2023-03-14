import React from "react";
import { DottedText } from "../../atoms/dotted-text/dotted-text";
import { OwnerCarAvatar, OwnerCarName, OwnerCarStatus, OwnerCarModel, OwnerCarStarsContainer, OwnerCarFeedbackContainer, StyledRating, OwnerCarModelDescription,
	OwnerCarMainContainer, OwnerCarGeneralContainer
} from "./owner-car-info-styles";


export const OwnerCar = ({...value}, {...props}) =>
	<OwnerCarGeneralContainer>
		<OwnerCarMainContainer>
			<OwnerCarAvatar>{value.avatar}</OwnerCarAvatar><OwnerCarName>{value.name}</OwnerCarName><OwnerCarStatus><DottedText text={value.status}/></OwnerCarStatus>
			<OwnerCarModel>{value.model}</OwnerCarModel>
			<OwnerCarStarsContainer><StyledRating name="size-large" defaultValue={4.5} precision={0.5} size={"large"}/></OwnerCarStarsContainer><OwnerCarFeedbackContainer>{value.feedbacks} отзывы</OwnerCarFeedbackContainer>
		</OwnerCarMainContainer>
		<OwnerCarModelDescription>{value.description}</OwnerCarModelDescription>
	</OwnerCarGeneralContainer>
