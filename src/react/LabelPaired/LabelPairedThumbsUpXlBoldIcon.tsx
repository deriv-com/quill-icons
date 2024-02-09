import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpXlBoldIcon = (
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
      <path d='M15.188 7.64q1.36.423 2.015 1.594.657 1.172.281 2.579l-.234.937q-.234.75-.562 1.5H21q1.266.047 2.11.89.843.844.89 2.11-.047 1.266-.89 2.11.14.421.14.89-.047 1.5-1.172 2.39.047.282.047.61-.046 1.5-1.125 2.344-.047 1.265-.89 2.062-.844.798-2.11.844h-4.547a5.3 5.3 0 0 1-2.953-.89l-2.86-1.922q-.843-.657-.327-1.547.656-.798 1.546-.328l2.907 1.921a2.9 2.9 0 0 0 1.687.516H18q.704-.046.75-.75a.4.4 0 0 0-.047-.187q-.187-.938.703-1.36.423-.188.469-.703a.76.76 0 0 0-.14-.469q-.375-.515-.188-1.078A1.14 1.14 0 0 1 20.39 21q.563-.141.609-.75a.8.8 0 0 0-.187-.516 1.02 1.02 0 0 1-.235-.984q.14-.562.703-.797.423-.188.469-.703-.046-.704-.75-.75h-6.281q-.657 0-.985-.61-.28-.609.094-1.171a7.8 7.8 0 0 0 1.219-2.578l.281-.938q.188-1.03-.75-1.406-1.03-.188-1.406.75l-.281.937a6.7 6.7 0 0 1-1.407 2.579l-2.39 2.624q-.75.704-1.594.094-.703-.796-.094-1.593l2.438-2.672a4.4 4.4 0 0 0 .89-1.641l.282-.937q.42-1.36 1.593-2.016 1.172-.656 2.579-.281M1.5 15h3q.657 0 1.078.422Q6 15.843 6 16.5V27q0 .657-.422 1.078-.421.422-1.078.422h-3q-.656 0-1.078-.422Q0 27.657 0 27V16.5q0-.656.422-1.078Q.843 15 1.5 15' />
    </g>
    <defs>
      <clipPath id='6000293dfc4a62e0b1e79af17a17919e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpXlBoldIcon);
export default ForwardRef;
