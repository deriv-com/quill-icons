import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5.938c-.082 0-.137.027-.219.054l-5.96 2.133 1.23.465c.136-.082.273-.137.41-.192l4.375-1.64a.446.446 0 0 1 .574.273.42.42 0 0 1-.273.547L5.28 9.028l3.5 1.257a.6.6 0 0 0 .219.027c.055 0 .137 0 .191-.027l5.961-2.16-5.96-2.133A.5.5 0 0 0 9 5.938M.66 8.753c-.246-.082-.41-.328-.41-.629 0-.273.164-.52.41-.602l7.684-2.761c.191-.082.41-.137.656-.137.219 0 .438.055.629.137l7.684 2.761a.65.65 0 0 1 0 1.23l-7.684 2.763a1.6 1.6 0 0 1-.629.136c-.246 0-.465-.054-.656-.136L3.695 9.848a3.69 3.69 0 0 0-1.257 2.57c.164.383.273.766.355 1.148.164.739.3 1.805.055 2.98-.028.11-.082.22-.192.274s-.219.082-.328.055l-1.75-.437a.42.42 0 0 1-.328-.274c-.027-.137 0-.3.082-.41.219-.328.438-.684.602-1.04.328-.628.629-1.421.629-2.214v-.027c.027-1.121.492-2.16 1.23-2.953zm13.153 2.187.437 3.965c0 .985-2.352 1.969-5.25 1.969s-5.25-.984-5.25-1.969l.41-3.965 1.258.465-.328 3.281c.11.11.328.22.656.356.793.3 1.941.52 3.254.52s2.46-.22 3.227-.52c.328-.137.546-.246.656-.355l-.328-3.282zm-.793 3.637v.027zm-8.067 0v.027z' />
    </g>
    <defs>
      <clipPath id='ca77c902963135ba6c71a087596643c7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapSmBoldIcon);
export default ForwardRef;
