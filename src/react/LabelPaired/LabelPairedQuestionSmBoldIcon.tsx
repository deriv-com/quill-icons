import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionSmBoldIcon = (
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
      <path d='M1.875 8.125c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656c0-1.914 1.56-3.5 3.473-3.473h.875a3.49 3.49 0 0 1 3.5 3.5v.11a3.3 3.3 0 0 1-1.45 2.734l-1.42.957a.86.86 0 0 0-.384.711v.055c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.055c0-.71.355-1.394.957-1.805l1.422-.957c.574-.355.902-.984.902-1.64v-.137a2.194 2.194 0 0 0-2.187-2.187h-.875c-1.231 0-2.188.984-2.188 2.187m2.625 8.75A.864.864 0 0 1 3.625 16c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='2453c3f7d65c290085b8d822024b94ba__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionSmBoldIcon);
export default ForwardRef;
