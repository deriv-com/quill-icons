import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 19.125c0 .234.14.375.375.375.094 0 .188 0 .234-.094l6.047-5.718c.047-.047.047-.094.047-.188 0-.047 0-.094-.047-.14L19.36 7.64a.26.26 0 0 0-.234-.14.37.37 0 0 0-.375.375V10.5c0 .422-.375.75-.75.75h-4.5c-3.328 0-6 2.719-6 6 0 1.688.703 2.906 1.547 3.797C9 20.812 9 20.578 9 20.344c0-2.532 2.016-4.594 4.547-4.594H18c.375 0 .75.375.75.75v2.625m-1.5-1.875h-3.703c-1.688 0-3.047 1.406-3.047 3.094 0 .703.656 1.453 1.078 1.875.235.187.422.468.422.797v.047c0 .515-.469.937-.984.937-.094 0-.235 0-.328-.047C9.844 23.578 6 21.656 6 17.25c0-4.125 3.328-7.5 7.5-7.5h3.75V7.875A1.88 1.88 0 0 1 19.125 6c.469 0 .938.188 1.266.516l6.047 5.718c.328.329.562.797.562 1.266 0 .516-.234.938-.562 1.266l-6.047 5.718c-.328.375-.797.516-1.266.516a1.85 1.85 0 0 1-1.875-1.875V17.25M3 7.5h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3c-.844 0-1.5.703-1.5 1.5V27c0 .844.656 1.5 1.5 1.5h16.5c.797 0 1.5-.656 1.5-1.5v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='cb87ac5c349c5de6a90720a677483d9b__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareXlRegularIcon);
export default ForwardRef;
