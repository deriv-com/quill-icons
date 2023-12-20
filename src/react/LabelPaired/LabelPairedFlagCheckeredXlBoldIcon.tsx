import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFlagCheckeredXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.125 6c.688.063 1.063.438 1.125 1.125v1.313l3.984-.985c1.844-.437 3.625-.25 5.344.563A7.388 7.388 0 0 0 15 8.859c1.188 0 2.344-.28 3.469-.843l.422-.188c.53-.25 1-.234 1.406.047.437.25.672.656.703 1.219v13.125c-.031.656-.36 1.125-.984 1.406l-1.594.61c-2.281.812-4.5.687-6.656-.376C9.922 22.984 8 22.781 6 23.25l-3.75.938v4.687c-.062.688-.437 1.063-1.125 1.125C.438 29.938.063 29.563 0 28.875V7.125C.063 6.438.438 6.063 1.125 6m1.125 7.078L6 12.234v-2.39l-3.75.937zm0 2.297v2.203L6 16.734v-2.156zm0 4.5v2.016l3.234-.844c.157-.031.329-.063.516-.094v-1.875zm6 .89a10.82 10.82 0 0 1 4.5 1.079v-2.297l-2.578-.797a4.43 4.43 0 0 0-1.922-.14zM15 22.5a6.382 6.382 0 0 0 2.625-.375l1.125-.422V19.5l-1.219.281A8.66 8.66 0 0 1 15 19.97zm3.75-5.297V15l-1.219.281A8.66 8.66 0 0 1 15 15.47v2.25a6.57 6.57 0 0 0 2.063-.14zm0-4.5V10.36c-1.219.5-2.469.75-3.75.75v2.11a6.57 6.57 0 0 0 2.063-.14zm-6-1.875a8.493 8.493 0 0 1-2.203-.797A5.783 5.783 0 0 0 8.25 9.47v2.344a8.51 8.51 0 0 1 2.531.28l1.969.61zm0 4.219-2.578-.797a4.43 4.43 0 0 0-1.922-.14v2.25a7.588 7.588 0 0 1 2.531.234l1.969.61z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlBoldIcon);
export default ForwardRef;
