import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXmlXlBoldIcon = (
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
      <path d='M3 27.75h2.25V30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11v6.984h-2.25V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75m6-4.5q0 .563.281.984l.469.703.422-.703c.187-.28.328-.609.328-.984s.328-.75.75-.75c.375 0 .75.375.75.75q0 .984-.562 1.828l-.797 1.172.797 1.219c.374.562.562 1.172.562 1.781 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-.328-.14-.656-.328-.937l-.422-.704-.469.703A1.7 1.7 0 0 0 9 29.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-.61.188-1.266.516-1.781l.797-1.219-.797-1.172A3.6 3.6 0 0 1 7.5 23.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m12 6v-6c0-.375.328-.75.75-.75.375 0 .75.375.75.75v5.25h.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75m-6.984-6.703c.328-.094.703.047.843.328l1.641 2.672 1.594-2.672a.76.76 0 0 1 .843-.328c.329.094.563.375.563.703v6c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3.281l-.89 1.453c-.141.234-.376.375-.61.375a.75.75 0 0 1-.656-.375L15 25.969v3.281c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.328.188-.61.516-.703' />
    </g>
    <defs>
      <clipPath id='5653fc30a6c463cdd5d1e305abd5359e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXmlXlBoldIcon);
export default ForwardRef;
