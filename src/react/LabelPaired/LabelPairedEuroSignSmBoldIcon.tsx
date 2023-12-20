import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.465 10.313H.78c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656h.903c.4-1.294 1.13-2.342 2.187-3.145 1.057-.802 2.288-1.212 3.692-1.23h.656c.4.036.62.255.656.656-.036.401-.255.62-.656.657h-.656c-1.04.018-1.951.3-2.735.847A4.865 4.865 0 0 0 3.078 9h4.266c.4.036.62.255.656.656-.036.401-.255.62-.656.656H2.777a3.524 3.524 0 0 0 0 .876h4.567c.4.036.62.255.656.656-.036.4-.255.62-.656.656H3.078c.365.912.948 1.65 1.75 2.215.784.547 1.695.83 2.734.848h.657c.4.036.62.255.656.656-.036.4-.255.62-.656.656h-.656c-1.404-.018-2.635-.428-3.692-1.23-1.057-.803-1.786-1.85-2.187-3.145H.78c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.656h.684a3.524 3.524 0 0 1 0-.876'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmBoldIcon);
export default ForwardRef;
