import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellSlashCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.914 3.617 4.313 6.29c.562-.89 1.375-1.43 2.437-1.617V4.25a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54v.422c.875.156 1.586.555 2.133 1.195.562.64.851 1.414.867 2.32v.774a4.745 4.745 0 0 0 1.031 2.93l.352.445a.567.567 0 0 1 .094.539l2.062 1.617c.25.235.281.5.094.797-.235.25-.5.281-.797.094L.21 4.508c-.25-.235-.281-.5-.094-.797.235-.25.5-.281.797-.094m4.29 3.352 5.366 4.219a5.665 5.665 0 0 1-.445-2.227v-.774c-.016-.687-.25-1.265-.703-1.734C8.953 6 8.375 5.766 7.687 5.75h-.374c-.454 0-.868.11-1.243.328a2.487 2.487 0 0 0-.867.89m4.312 6.281H2.813a.595.595 0 0 1-.516-.328.609.609 0 0 1 .07-.586l.352-.445A4.713 4.713 0 0 0 3.75 8.984v-.28l1.102.866a5.988 5.988 0 0 1-.915 2.555h4.149zM9 14c0 .406-.148.758-.445 1.055A1.441 1.441 0 0 1 7.5 15.5c-.406 0-.758-.148-1.055-.445A1.442 1.442 0 0 1 6 14h1.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashCaptionBoldIcon);
export default ForwardRef;
