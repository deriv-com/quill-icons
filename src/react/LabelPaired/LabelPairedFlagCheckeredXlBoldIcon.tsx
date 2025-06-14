import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 6c.61 0 1.125.516 1.125 1.125v1.313l3.984-.985c1.782-.422 3.657-.234 5.297.61a7.75 7.75 0 0 0 6.89 0l.47-.235C19.828 7.36 21 8.062 21 9.141v13.078c0 .656-.422 1.218-.984 1.406l-1.641.61c-2.156.843-4.594.703-6.656-.329A8.34 8.34 0 0 0 6 23.25l-3.75.938v4.687A1.11 1.11 0 0 1 1.125 30C.469 30 0 29.531 0 28.875V7.125C0 6.515.469 6 1.125 6m1.125 7.078L6 12.281V9.844l-3.75.937zm0 2.297v2.203L6 16.781v-2.203zm0 4.5v2.016l3.188-.797.562-.14v-1.876zm6 .89q2.32.07 4.5 1.126v-2.344l-2.625-.75a5.1 5.1 0 0 0-1.875-.188zM15 22.5c.844.094 1.734-.047 2.578-.375l1.172-.422V19.5l-1.219.281c-.843.235-1.687.282-2.531.235zm3.75-5.297V15l-1.219.281c-.843.235-1.687.281-2.531.235v2.25c.656.047 1.36 0 2.016-.141zm0-4.5V10.36a9.6 9.6 0 0 1-3.75.75v2.11c.656.094 1.36.047 2.016-.094zm-6-1.828c-.797-.187-1.5-.469-2.203-.797a6 6 0 0 0-2.297-.61v2.391a7.8 7.8 0 0 1 2.531.282l1.969.562zm0 4.172-2.625-.75a5.1 5.1 0 0 0-1.875-.188v2.25a7.8 7.8 0 0 1 2.531.282l1.969.562z' />
    </g>
    <defs>
      <clipPath id='ab293eed5c7db05f113df0bc81a61c90__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlBoldIcon);
export default ForwardRef;
