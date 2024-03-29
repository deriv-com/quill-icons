import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeLimitLossesIcon = (
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
    <path d='M25.333 13.453v-.786c0-1.107-.893-2-2-2h-.706c-.334-3.734-3.48-6.68-7.294-6.68S8.373 6.92 8.04 10.653h-.707c-1.106 0-2 .894-2 2v13.334c0 1.106.894 2 2 2h17.334c1.106 0 2-.894 2-2V15.32c0-.867-.56-1.6-1.334-1.88zm-2.706-1.466h.706a.66.66 0 0 1 .667.666v.667h-1.613c.12-.44.213-.88.253-1.347zm-7.294-6.654c3.307 0 6 2.694 6 6 0 .694-.146 1.36-.373 2H18V12c0-.733-.6-1.333-1.333-1.333H14V9.333h3.333A.66.66 0 0 0 18 8.667.66.66 0 0 0 17.333 8H16v-.667a.66.66 0 0 0-.667-.666.66.66 0 0 0-.666.666V8H14c-.733 0-1.333.6-1.333 1.333v1.334c0 .733.6 1.333 1.333 1.333h2.667v1.333H9.693a6.1 6.1 0 0 1-.36-2c0-3.306 2.694-6 6-6m-8 6.667h.734c.04.453.12.893.253 1.333h-.973a.66.66 0 0 1-.667-.666.66.66 0 0 1 .667-.667zm18 10.667h-4.666A.66.66 0 0 1 20 22v-2.667a.66.66 0 0 1 .667-.666h4.666zm0-5.334h-4.666c-1.107 0-2 .894-2 2V22c0 1.107.893 2 2 2h4.666v2a.66.66 0 0 1-.666.667H7.333A.66.66 0 0 1 6.667 26V14.547c.213.08.426.12.666.12h17.334a.66.66 0 0 1 .666.666zM22 20.667a.66.66 0 0 1 .667-.667.66.66 0 0 1 .666.667.66.66 0 0 1-.666.666.66.66 0 0 1-.667-.666' />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLimitLossesIcon);
export default ForwardRef;
