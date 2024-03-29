import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeVanillaOptionsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M25.813 26.067a.66.66 0 0 1-.667.666H11.6a.66.66 0 0 1-.667-.666.66.66 0 0 1 .667-.667h13.546a.66.66 0 0 1 .667.667m-.667-8.72a.66.66 0 0 0-.666.666v.267a.66.66 0 0 0 .666.667.66.66 0 0 0 .667-.667v-.267a.66.66 0 0 0-.667-.666m0 2.56a.66.66 0 0 0-.666.666v.467a.66.66 0 0 0 .666.667.66.66 0 0 0 .667-.667v-.467a.66.66 0 0 0-.667-.666m0 2.76a.66.66 0 0 0-.666.666v.267a.66.66 0 0 0 .666.667.66.66 0 0 0 .667-.667v-.267a.66.66 0 0 0-.667-.666m-4.16-9.32L8.773 25.56c-.427.427-1 .667-1.6.667s-1.173-.24-1.6-.667c-.493-.493-.72-1.053-.72-1.667 0-.613.24-1.173.667-1.6l12.186-12.2h-.786a2.07 2.07 0 0 1-2.067-2.08v-.68a2.08 2.08 0 0 1 2.067-2.08h6.36c.68 0 1.32.267 1.8.747s.746 1.12.746 1.8v6.36a2.07 2.07 0 0 1-2.066 2.067h-.68A2.08 2.08 0 0 1 21 14.16v-.813zm.627-1.52c.427.173.707.586.707 1.053v1.28c0 .413.333.747.746.747h.68a.745.745 0 0 0 .747-.747V7.8c0-.32-.133-.627-.36-.853a1.2 1.2 0 0 0-.853-.347h-6.36a.734.734 0 0 0-.734.747v.68c0 .413.334.746.734.746h1.28c.453 0 .866.28 1.053.694.173.426.08.906-.24 1.24L6.48 23.24c-.36.36-.36.96 0 1.32.426.427 1.026.427 1.386.067L20.4 12.093a1.13 1.13 0 0 1 1.24-.253z' />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeVanillaOptionsIcon);
export default ForwardRef;
