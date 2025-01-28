import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.063 5.5a2.626 2.626 0 0 0-2.625 2.625.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438c0-1.914 1.558-3.5 3.5-3.5h.875c1.914 0 3.5 1.586 3.5 3.5 0 .984-.465 1.887-1.231 2.46l-1.668 1.259a1.49 1.49 0 0 0-.601 1.203v.328a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438v-.328c0-.738.355-1.45.957-1.914l1.668-1.258c.546-.41.875-1.04.875-1.75A2.626 2.626 0 0 0 4.938 5.5zM3.843 16c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656A.63.63 0 0 1 3.844 16' />
    </g>
    <defs>
      <clipPath id='3e8b8d0b34465fd985e5565382ce7f90__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionSmRegularIcon);
export default ForwardRef;
