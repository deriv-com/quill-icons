import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagTokelauIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#012169'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#FED100'
      d='M4.35 13.638c-.233-.004 2.187-1.289 4.21-2.939 2.653-2.162 8.367-5.62 10.05-6.184.173-.06-.36.3-.43.414-1.792 2.124-.361 6.129 1.881 8.145.676.515.64.543 1.89.592v.118zm-.146.233s-.17.122-.17.213c0 .1.19.233.19.233l17.359.191.32-.212-.446-.275z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m4.956 2.717-.546.287.104-.608-.441-.43.61-.089.273-.553.273.553.611.089-.442.43.105.608M4.956 11.926l-.546.287.104-.608-.442-.43.611-.089.273-.553.273.553.611.089-.442.43.104.608M2.16 6.782l-.546.287.104-.609-.442-.43.61-.088.274-.554.273.553.61.09-.441.43.104.608M7.786 5.629l-.41.215.079-.456-.332-.323L7.581 5l.205-.415.205.414.458.067-.331.323.078.456'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagTokelauIcon);
export default ForwardRef;
