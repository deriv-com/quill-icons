import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagTanzaniaIcon = (
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
    <path fill='#20BD42' d='M0 10.975 22.03 0H2a2 2 0 0 0-2 2z' />
    <path fill='#03ACE1' d='M2.032 16 24 5.005V14a2 2 0 0 1-2 2z' />
    <path
      fill='#000'
      d='M0 14v-1.957L23.198.398c.46.345.766.883.8 1.493V3.98L.798 15.6A2 2 0 0 1 0 14'
    />
    <path
      fill='#FCD715'
      d='M0 10.975v1.073L23.198.398A2 2 0 0 0 22.03 0zM24 5.005v-1.02L.803 15.601c.332.25.745.397 1.193.398h.036z'
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
const ForwardRef = forwardRef(FlagTanzaniaIcon);
export default ForwardRef;
