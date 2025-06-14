import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.484 5.734 5.782 4.493C8.164 8.859 9.57 7.844 11.25 7.53V6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v1.016c0 1.757.586 3.476 1.68 4.882l.586.704c.195.273.273.625.156.898l3.437 2.734c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.266 5.664 8.828 6.915a9.6 9.6 0 0 1-.703-3.672v-1.016c0-2.383-1.992-4.375-4.375-4.375-1.602 0-3.008.86-3.75 2.148m7.11 10.352H4.687c-.391 0-.704-.195-.86-.508-.156-.312-.117-.703.117-1.015l.586-.704c1.094-1.406 1.719-3.125 1.719-4.882v-.43l1.797 1.406c-.156 1.524-.664 3.008-1.485 4.258h6.915zM15 23c0 .664-.273 1.328-.742 1.797s-1.094.703-1.758.703-1.328-.234-1.797-.703S10 23.664 10 23h5' />
    </g>
    <defs>
      <clipPath id='b729065ad2652a8f97df960185c3c3e7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashLgBoldIcon);
export default ForwardRef;
