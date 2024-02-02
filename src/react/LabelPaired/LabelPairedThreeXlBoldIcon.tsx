import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.625Q.095 7.595 1.125 7.5h12q.75.047 1.031.703.282.703-.234 1.219l-6.985 6.703h1.875q2.626.046 4.36 1.828 1.781 1.734 1.828 4.36-.046 2.625-1.828 4.359-1.735 1.781-4.36 1.828H4.548q-1.406 0-2.531-.75a4.9 4.9 0 0 1-1.828-1.922l-.047-.187q-.375-.985.468-1.5.986-.375 1.5.468l.094.188Q3 26.203 4.547 26.25h4.266q1.686-.047 2.765-1.172Q12.703 24 12.75 22.313q-.047-1.687-1.172-2.766-1.078-1.125-2.765-1.172H4.125q-.75-.047-1.031-.703-.282-.703.234-1.219l6.985-6.703H1.124Q.095 9.657 0 8.625' />
    </g>
    <defs>
      <clipPath id='bbc69b238e6ae17ee18c0d24d2ca5184__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlBoldIcon);
export default ForwardRef;
