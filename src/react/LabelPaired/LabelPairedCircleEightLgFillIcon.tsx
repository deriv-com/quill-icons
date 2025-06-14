import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightLgFillIcon = (
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
      <path d='M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.313-5h-.626a2.826 2.826 0 0 0-2.812 2.813c0 .624.195 1.21.508 1.64a3.12 3.12 0 0 0-1.133 2.422c0 1.758 1.367 3.125 3.125 3.125h1.25a3.11 3.11 0 0 0 3.125-3.125c0-.977-.469-1.836-1.172-2.422.352-.43.547-1.015.547-1.64 0-1.524-1.29-2.813-2.812-2.813m-.626 3.75c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937zm.626 1.875h.312c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.937' />
    </g>
    <defs>
      <clipPath id='113be2d69fb2b0349f707f9ac9c18686__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightLgFillIcon);
export default ForwardRef;
