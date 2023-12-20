import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBruneiIcon = (
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
      fill='#F8E200'
      d='M24 2v10l-7.135-3.865.635-.635-2-2-1 1v.354l-1.129-.611L12 3.5l-.787 1.574L1.856.005C1.903.002 1.95 0 2 0h20a2 2 0 0 1 2 2M13.68 12.41 20.308 16H2a2 2 0 0 1-2-2V5l8.5 4.604V11.5l2 1v-1.812l3 1.624v.188z'
    />
    <path
      fill='#333'
      d='M0 5V3l7.135 3.865L6.5 7.5l2 2v.104zM10.5 10.688l3 1.624V10.5h-3zM13.68 12.41 20.308 16H22c.462 0 .887-.156 1.226-.42L15.5 11.397v.104zM12 9.5h-1.5v-.813z'
    />
    <path
      fill='#fff'
      d='M0 3V2A2 2 0 0 1 1.856.005l9.357 5.069L10.5 6.5h3l-.129-.257 1.129.611V7.5l-1 1v1H12l-1.5-.813V8.5l-1-1v-1l-1-1-1.365 1.365zM15.5 11.396l7.726 4.185c.47-.366.774-.938.774-1.581v-2l-7.135-3.865L15.5 9.5z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#D1091E'
      fillRule='evenodd'
      d='m9.5 7.5 1 1v4l-2-1v-2l-2-2 2-2 1 1zm1 2h3v1h-3zm4-2-1 1v4l2-1v-2l2-2-2-2-1 1zm-4-1h3l-1.5-3z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBruneiIcon);
export default ForwardRef;
