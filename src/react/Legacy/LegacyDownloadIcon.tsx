import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDownloadIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M5.5 16a.5.5 0 0 1 .5.5V18h12v-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5zM5 17H3v4h18v-4h-2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5zm8.5-15a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 .4.8l-4.5 6a.5.5 0 0 1-.8 0l-4.5-6a.5.5 0 0 1 .4-.8H10V2.5a.5.5 0 0 1 .5-.5zM13 3h-2v7.5a.5.5 0 0 1-.5.5h-2l3.5 4.667L15.5 11h-2a.5.5 0 0 1-.5-.5z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyDownloadIcon);
export default ForwardRef;
