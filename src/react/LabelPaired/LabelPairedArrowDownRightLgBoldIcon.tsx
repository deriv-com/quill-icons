import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.813 21.75H3.438c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h7.109l-9.024-9.023c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0l9.023 9.063v-7.148c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v9.375c0 .546-.43.937-.937.937' />
    </g>
    <defs>
      <clipPath id='4d312a1f53a696d9f128379b19927868__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgBoldIcon);
export default ForwardRef;
