import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaySmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.781 5.582a.5.5 0 0 0-.437-.027c-.137.082-.246.246-.246.383v9.625c0 .164.109.328.246.382a.42.42 0 0 0 .437 0l7.875-4.812a.44.44 0 0 0 .219-.383.43.43 0 0 0-.219-.355zm-.875-.766c.41-.246.93-.246 1.34 0l7.875 4.813c.383.246.629.684.629 1.121 0 .465-.246.902-.629 1.121l-7.875 4.813a1.25 1.25 0 0 1-1.34.027c-.41-.219-.656-.656-.656-1.148V5.938c0-.465.246-.903.656-1.122' />
    </g>
    <defs>
      <clipPath id='dde4e9a80961a207f722405d49846b72__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmRegularIcon);
export default ForwardRef;
