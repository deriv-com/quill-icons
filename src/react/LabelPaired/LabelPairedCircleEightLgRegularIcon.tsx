import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.469-5c1.445 0 2.656 1.21 2.656 2.656 0 .82-.352 1.524-.898 1.992.703.547 1.21 1.407 1.21 2.383A2.967 2.967 0 0 1 10.47 20.5H9.53a2.967 2.967 0 0 1-2.969-2.969c0-.976.47-1.836 1.172-2.383-.546-.468-.859-1.171-.859-1.992A2.66 2.66 0 0 1 9.531 10.5zm-.938 4.063h.938c.742 0 1.406-.626 1.406-1.407 0-.742-.664-1.406-1.406-1.406H9.53c-.781 0-1.406.664-1.406 1.406a1.4 1.4 0 0 0 1.406 1.406m.938 1.25H9.53c-.976 0-1.719.78-1.719 1.718 0 .977.743 1.719 1.72 1.719h.937c.937 0 1.719-.742 1.719-1.719 0-.937-.782-1.718-1.72-1.718' />
    </g>
    <defs>
      <clipPath id='c04f30dc92828c0bebc17acabf68212a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightLgRegularIcon);
export default ForwardRef;
