import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpXlRegularIcon = (
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
      <path d='m13.5 9.844-.187.797a7.86 7.86 0 0 1-3.376 4.547l-.14.093a3.7 3.7 0 0 0-.985.938c-.234.328-.703.422-1.03.187-.329-.281-.423-.75-.188-1.078.375-.515.843-.937 1.406-1.312l.14-.094a6.42 6.42 0 0 0 2.72-3.703l.187-.75c.422-1.406 1.828-2.25 3.234-1.875 1.406.422 2.25 1.828 1.875 3.234l-.234.797a13 13 0 0 1-.703 1.875H21c1.64 0 3 1.36 3 3 0 .844-.375 1.594-.89 2.156q.14.423.14.844c0 .89-.422 1.688-.984 2.25.14.328.234.75.234 1.125 0 1.125-.61 2.11-1.5 2.625 0 1.688-1.36 3-3 3h-4.219c-1.031 0-2.062-.281-2.906-.844l-1.828-1.218c-.563-.422-1.078-.891-1.453-1.5-.235-.329-.14-.797.234-1.032.328-.234.797-.14 1.031.235.282.422.61.75 1.032 1.03l1.828 1.22c.61.422 1.312.609 2.062.609H18c.797 0 1.5-.656 1.5-1.5 0-.094-.047-.187-.047-.281-.094-.375.14-.797.516-.89.562-.188 1.031-.75 1.031-1.407 0-.375-.14-.703-.328-.938-.14-.187-.188-.375-.14-.609a.73.73 0 0 1 .374-.516c.516-.234.844-.75.844-1.312 0-.281-.094-.563-.234-.75a.74.74 0 0 1 .28-.985c.423-.28.704-.75.704-1.265 0-.844-.703-1.5-1.5-1.5h-6.047c-.281 0-.515-.188-.656-.422a.72.72 0 0 1 0-.75 9.1 9.1 0 0 0 1.172-2.672l.234-.75a1.173 1.173 0 0 0-.797-1.406 1.173 1.173 0 0 0-1.406.797M1.5 16.5V27h3V16.5zm-1.5 0c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5V27c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 27z' />
    </g>
    <defs>
      <clipPath id='b0391aed9f8329293f8823f5696e4a9a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpXlRegularIcon);
export default ForwardRef;
