import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagIsraelIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#0137B7'
      fillRule='evenodd'
      d='m12 3.276 1.319 2.374h2.61L14.625 8l1.306 2.35h-2.611L12 12.724l-1.319-2.374h-2.61L9.375 8 8.07 5.65h2.611L12 3.276ZM10.237 6.45H9.43l.403.726.404-.726ZM10.29 8l.861-1.55h1.696L13.709 8l-.861 1.55h-1.696L10.291 8Zm-.458.824-.403.726h.807l-.404-.726Zm1.764 1.526.403.726.403-.726h-.806Zm2.166-.8h.807l-.403-.726-.404.726Zm.404-2.374.403-.726h-.807l.404.726ZM12.403 5.65h-.806L12 4.924l.403.726Z'
      clipRule='evenodd'
    />
    <path fill='#0137B7' d='M0 2h24v1H0V2ZM0 13h24v1H0v-1Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagIsraelIcon);
export default ForwardRef;
