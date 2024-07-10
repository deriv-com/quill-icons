import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLimitMaximumIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#333'
      d='M13.5 0A1.5 1.5 0 0 1 15 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5v-13A1.5 1.5 0 0 1 2.5 0zm0 14h-11q-.263-.001-.5-.085v.585a.5.5 0 0 0 .41.492L2.5 15h11a.5.5 0 0 0 .492-.41L14 14.5v-.586a1.5 1.5 0 0 1-.5.086m0-2h-11q-.263-.001-.5-.085v.585a.5.5 0 0 0 .41.492L2.5 13h11a.5.5 0 0 0 .492-.41L14 12.5v-.586a1.5 1.5 0 0 1-.5.086m0-2h-11q-.263-.001-.5-.085v.585a.5.5 0 0 0 .41.492L2.5 11h11a.5.5 0 0 0 .492-.41L14 10.5v-.586a1.5 1.5 0 0 1-.5.086m0-2h-11q-.263-.001-.5-.085V8.5a.5.5 0 0 0 .41.492L2.5 9h11a.5.5 0 0 0 .492-.41L14 8.5v-.586a1.5 1.5 0 0 1-.5.086m.5-2a1 1 0 0 0-.993.883L13 7h.5a.5.5 0 0 0 .492-.41L14 6.5zM2 6v.5a.5.5 0 0 0 .41.492L2.5 7H3l-.007-.117A1 1 0 0 0 2 6m10-5H4a2 2 0 0 1-1.85 1.995L2 3v2l.15.005A2 2 0 0 1 4 7h8a2 2 0 0 1 2-2V3l-.15-.005A2 2 0 0 1 12 1M8.26 2v.436l.145.03a.97.97 0 0 1 .55.388l-.346.38-.075-.088-.088-.079a.65.65 0 0 0-.232-.111v.77l.153.049q.289.105.441.271.192.21.192.567 0 .343-.18.603t-.56.339V6h-.433v-.427l-.138-.022a1 1 0 0 1-.347-.14A1.3 1.3 0 0 1 7 5.086l.342-.38.075.087q.079.082.167.142.133.09.293.118v-.835L7.74 4.18q-.323-.105-.478-.295a.87.87 0 0 1-.186-.566q0-.367.192-.599.19-.232.56-.283V2zm-.046 2.31v.734a.37.37 0 0 0 .262-.38.4.4 0 0 0-.05-.198q-.048-.095-.212-.155m-.337-1.363-.068.022a.3.3 0 0 0-.143.105.37.37 0 0 0-.066.225q0 .135.066.21.067.073.21.124zM3 1h-.5a.5.5 0 0 0-.492.41L2 1.5V2a1 1 0 0 0 .993-.883zm10.5 0H13l.007.117A1 1 0 0 0 14 2v-.5a.5.5 0 0 0-.41-.492z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyLimitMaximumIcon);
export default ForwardRef;
