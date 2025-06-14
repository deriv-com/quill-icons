import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampLgBoldIcon = (
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
      <path d='M17.305 7.375c-1.172.04-2.266.664-2.852 1.68a3.28 3.28 0 0 0 0 3.28 3.297 3.297 0 0 0 5.703 0 3.28 3.28 0 0 0 0-3.28c-.586-1.016-1.68-1.68-2.851-1.68m3.32 7.305a5.2 5.2 0 0 1-3.32 1.172c-1.68 0-3.203-.82-4.14-2.11l-2.462 2.461a5.12 5.12 0 0 1 2.11 4.14c0 1.25-.43 2.423-1.172 3.282h7.5c.82 0 1.484-.664 1.484-1.445zM7.656 23.625a3.276 3.276 0 0 0 3.282-3.281c0-1.367-.86-2.578-2.07-3.047h-.04a2.85 2.85 0 0 0-1.172-.235 3.276 3.276 0 0 0-3.281 3.282 3.25 3.25 0 0 0 3.281 3.281m1.25-8.281 3.399-3.399c-.117-.39-.157-.82-.157-1.25 0-2.851 2.305-5.195 5.157-5.195S22.5 7.844 22.5 10.695V22.18c0 1.836-1.523 3.32-3.36 3.32H7.657A5.15 5.15 0 0 1 2.5 20.344a5.15 5.15 0 0 1 5.156-5.157c.43 0 .86.04 1.25.157M6.055 10.07a.95.95 0 0 1 .937-.937h3.672c.39 0 .742.234.86.586a.9.9 0 0 1-.196 1.015l-3.633 3.633c-.351.352-.937.352-1.328 0a.97.97 0 0 1 0-1.328l2.031-2.031H6.992a.925.925 0 0 1-.937-.938m10.703-1.992v.742h.742v-.742h.742v.742c.274 0 .547.078.742.274.47.43.508 1.133.078 1.601.196.196.313.47.313.742 0 .626-.508 1.133-1.133 1.133v.742H17.5v-.742h-.742v.742h-.742v-.742h-.743v-.742h.743V9.563h-.743V8.82h.743v-.742zm1.484 2.969h-1.484v.781h1.484a.42.42 0 0 0 .39-.39.42.42 0 0 0-.39-.391m0-1.485h-1.484v.743h1.484c.195 0 .39-.157.39-.352a.39.39 0 0 0-.39-.39m-10.117 7.97v.39c.586.234 1.016.781 1.016 1.406v.117h-.938v-.117a.534.534 0 0 0-.547-.547.534.534 0 0 0-.547.547c0 .313.235.547.547.547.82 0 1.485.664 1.485 1.484 0 .625-.43 1.172-1.016 1.407v.39h-.937v-.43a1.43 1.43 0 0 1-.977-1.367v-.156h.898v.156c0 .274.235.547.547.547a.56.56 0 0 0 .547-.547.534.534 0 0 0-.547-.547c-.82 0-1.445-.664-1.445-1.484 0-.625.39-1.21.976-1.406v-.39z' />
    </g>
    <defs>
      <clipPath id='0cf5974cdd31c12472c7e328ff6671ff__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampLgBoldIcon);
export default ForwardRef;
