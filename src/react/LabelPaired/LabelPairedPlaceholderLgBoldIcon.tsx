import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 6.75h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-.625c-.899 0-1.563.703-1.563 1.563v.624c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.626A3.443 3.443 0 0 1 3.688 6.75M1.188 13a.95.95 0 0 1 .937.938v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938m15.625 0a.95.95 0 0 1 .937.938v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938m0-1.25c-.547 0-.938-.39-.938-.937v-.626c0-.859-.703-1.562-1.562-1.562h-.626c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.624c1.876 0 3.438 1.563 3.438 3.438v.624c0 .547-.43.938-.937.938m.937 8.438v.625a3.443 3.443 0 0 1-3.437 3.437h-.626c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.624c.86 0 1.563-.664 1.563-1.562v-.625c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m-15.625 0v.625c0 .898.664 1.562 1.563 1.562h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-.625A3.42 3.42 0 0 1 .25 20.813v-.625c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m5.313 4.062c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937zM6.5 7.688c0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H7.437c-.546 0-.937-.39-.937-.937' />
    </g>
    <defs>
      <clipPath id='b901673ac196e69d8d687806c3e67b31__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderLgBoldIcon);
export default ForwardRef;
