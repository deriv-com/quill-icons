import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={36}
    viewBox='0 0 23 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.938 18.281q-.094 5.063-3.094 8.157-3.047 3.094-8.157 3.187-3.234-.046-5.859-1.594a11.6 11.6 0 0 1-4.172-4.172Q.11 21.234.063 18q.046-3.235 1.593-5.86A11.6 11.6 0 0 1 5.828 7.97q2.625-1.548 5.86-1.594 4.735.094 7.78 3.047l-3.14 3.047q-2.204-1.969-4.922-1.781-2.718.14-4.781 2.062Q4.61 14.72 4.469 18q.093 3.14 2.11 5.203 2.061 2.063 5.109 2.156 2.296-.045 3.703-.937 1.406-.891 2.109-2.016.656-1.171.797-2.062h-6.61v-4.032H22.75q.188.845.188 1.97' />
    </g>
    <defs>
      <clipPath id='26d4b2a360869f363ba9e08f02b5aef2__a'>
        <path d='M0 0h23v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleXlIcon);
export default ForwardRef;
