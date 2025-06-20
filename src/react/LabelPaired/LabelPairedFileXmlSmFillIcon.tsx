import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXmlSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5c0-.957.766-1.75 1.75-1.75h4.375v3.5c0 .492.383.875.875.875h3.5v3.938H4.813c-.985 0-1.75.792-1.75 1.75v3.937H1.75C.766 17.75 0 16.984 0 16zm10.5 1.75H7v-3.5zm-5.25 6.563q0 .328.164.574l.274.41.246-.41a1.03 1.03 0 0 0 .191-.575.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438q0 .573-.328 1.066l-.465.684.465.71c.219.329.328.684.328 1.04a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437c0-.192-.082-.383-.191-.547l-.247-.41-.273.41a1 1 0 0 0-.164.547.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437c0-.356.11-.739.3-1.04l.466-.71-.465-.684a2.1 2.1 0 0 1-.301-1.066.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m7 3.5v-3.5a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v3.062h.438a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-.876a.43.43 0 0 1-.437-.437m-4.074-3.91c.191-.055.41.027.492.19l.957 1.56.93-1.56c.11-.163.3-.245.492-.19a.44.44 0 0 1 .328.41v3.5a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-1.915l-.52.848a.43.43 0 0 1-.355.219.44.44 0 0 1-.383-.219l-.492-.848v1.915a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.5a.41.41 0 0 1 .3-.41' />
    </g>
    <defs>
      <clipPath id='63baaf0b3607f78620cd5f183bb9ffea__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXmlSmFillIcon);
export default ForwardRef;
