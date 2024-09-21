import 'atropos/css';
import Atropos from 'atropos/react';


export const AwsCertificateBadge = () => {
	const size = 100;

	const height = size;
	const width = size;


	return (
		<Atropos
			highlight={true}
			className="block w-max [box-sizing:border-box] shadow-2xl"
			innerClassName="rounded-xl backdrop-blur-sm border"
		>

			<div
				className='relative z-10 overflow-hidden'
				style={{ height: height + 20, width: width + 20 }}
			>
				<img
					data-atropos-offset="-4"
					src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
					className="aspect-square object-cover z-0 absolute left-1/2 bottom-1/2"
					style={{ height, width }}
				/>

				<div
					data-atropos-offset="-1"
					className='size-full backdrop-blur-sm z-10 relative bg-secondary-blur'></div>
			</div>


			<img
				data-atropos-offset="5"
				src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
				className="aspect-square object-cover z-20 absolute"
				style={{
					height,
					width,
					transformStyle: 'preserve-3d',
					left: `10px`,
					top: `10px`,
				}}
			/>

		</Atropos>
	)
}
