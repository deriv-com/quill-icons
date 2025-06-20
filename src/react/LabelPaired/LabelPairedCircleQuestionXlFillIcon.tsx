import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M7.922 13.781v.047a1.17 1.17 0 0 0 .703 1.453c.563.188 1.219-.094 1.406-.703l.047-.047a.35.35 0 0 1 .328-.234h2.719c.422 0 .75.281.75.703 0 .234-.14.469-.375.61l-2.062 1.171c-.376.188-.563.563-.563.985v.609c0 .656.469 1.125 1.125 1.125.61 0 1.078-.469 1.125-1.078l1.5-.89c.89-.516 1.5-1.5 1.5-2.532 0-1.64-1.36-3-3-3h-2.719c-1.125 0-2.11.703-2.484 1.781M10.5 22.5c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='a5c4e34b24ffac14ce837cb8d88992d1__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionXlFillIcon);
export default ForwardRef;
