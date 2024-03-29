import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagIsraelIcon = (
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
    <path fill='#fff' d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2' />
    <path
      fill='#0137B7'
      fillRule='evenodd'
      d='m12 3.276 1.319 2.374h2.61L14.625 8l1.306 2.35h-2.611L12 12.724l-1.319-2.374h-2.61L9.375 8 8.07 5.65h2.611zM10.237 6.45H9.43l.403.726zM10.29 8l.861-1.55h1.696L13.709 8l-.861 1.55h-1.696zm-.458.824-.403.726h.807zm1.764 1.526.403.726.403-.726zm2.166-.8h.807l-.403-.726zm.404-2.374.403-.726h-.807zM12.403 5.65h-.806L12 4.924z'
      clipRule='evenodd'
    />
    <path fill='#0137B7' d='M0 2h24v1H0zM0 13h24v1H0z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagIsraelIcon);
export default ForwardRef;
