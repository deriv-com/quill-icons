import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagNepalIcon = (
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
    <path fill='#DB133C' d='M11.654 8.463 1 1.804V15h10.61L4.033 8.463z' />
    <path
      fill='#003D93'
      fillRule='evenodd'
      d='M14.037 16 6.46 9.463h8.68L.73.456A2 2 0 0 0 0 1.982v12.025A2 2 0 0 0 2 16zm-2.383-7.537H4.033L11.61 15H1V1.804z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m4.65 6.347.342-.254-.415-.122.203-.399-.43.051.045-.432-.357.248-.139-.424-.257.312L3.369 5l-.12.409-.382-.224.054.435-.435-.03.224.375-.415.11.32.269-.141.133c-.479-.288-.666-.554-.969-1.105A2.137 2.137 0 0 0 3.67 7.5c1.543-.015 2.134-1.459 2.08-2.104a2.84 2.84 0 0 1-.93 1.09zM5.31 12.577l.809-.269-.817-.314.643-.548-.88.018.38-.748-.807.341.057-.828-.61.616-.273-.787-.32.796-.563-.625.015.855-.766-.368.347.784-.85-.054.638.593-.808.27.817.313-.643.548.876-.018-.377.748.805-.341-.054.829.608-.617.275.787.32-.796.563.626-.015-.856.763.368-.35-.784.852.054z'
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
const ForwardRef = forwardRef(FlagNepalIcon);
export default ForwardRef;
