import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagGuernseyIcon = (
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
      fill='#fff'
      d='M14 0h8a2 2 0 0 1 2 2v4H14zM10 0H2a2 2 0 0 0-2 2v4h10zM0 10v4a2 2 0 0 0 2 2h8v-6zM14 16h8a2 2 0 0 0 2-2v-4H14z'
    />
    <path
      fill='red'
      fillRule='evenodd'
      d='M24 10V6H14V0h-4v6H0v4h10v6h4v-6zM10.91 2l.545.545v4.91h-4.91L6 6.909v2.182l.545-.546h4.91v4.91l-.546.545h2.182l-.546-.545v-4.91h4.91l.545.546V6.909l-.545.546h-4.91v-4.91L13.091 2z'
      clipRule='evenodd'
    />
    <path
      fill='#F9DD16'
      d='m13.09 2-.545.545v4.91h4.91L18 6.909v2.182l-.545-.546h-4.91v4.91l.546.545h-2.182l.546-.545v-4.91h-4.91L6 9.091V6.909l.545.546h4.91v-4.91L10.909 2z'
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
const ForwardRef = forwardRef(FlagGuernseyIcon);
export default ForwardRef;
