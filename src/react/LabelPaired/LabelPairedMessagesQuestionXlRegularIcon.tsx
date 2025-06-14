import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.469 19.5H16.5c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5H3c-.844 0-1.5.703-1.5 1.5v9c0 .844.656 1.5 1.5 1.5h1.5c.797 0 1.5.703 1.5 1.5v.75l2.578-1.922c.281-.187.563-.328.89-.328M16.5 21H9.469l-3.797 2.86c-.234.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V21H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h13.5c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3M15 27c-1.687 0-3-1.312-3-3v-1.5h1.5V24c0 .844.656 1.5 1.5 1.5h5.484c.328 0 .657.14.891.328L24 27.75V27c0-.797.656-1.5 1.5-1.5H27c.797 0 1.5-.656 1.5-1.5v-9c0-.797-.703-1.5-1.5-1.5h-6V12h6c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3h-1.5v2.25c0 .328-.187.563-.422.703-.281.094-.562.094-.797-.094L20.484 27zM8.625 9.328A1.84 1.84 0 0 0 6.891 10.5v.047a.785.785 0 0 0 .468.984c.375.14.797-.094.938-.469l.047-.046c0-.141.14-.188.281-.188h1.922c.328 0 .562.235.562.516 0 .234-.093.422-.28.515l-1.454.844A.75.75 0 0 0 9 13.36v.422c0 .422.328.75.75.75.375 0 .75-.328.75-.75l1.078-.656c.656-.328 1.031-1.031 1.031-1.734a2.05 2.05 0 0 0-2.062-2.063zm1.125 8.438c.375.047.75-.141.938-.516a.91.91 0 0 0 0-1.078c-.188-.328-.563-.563-.938-.516a1.02 1.02 0 0 0-.984.516.91.91 0 0 0 0 1.078c.187.375.562.563.984.516' />
    </g>
    <defs>
      <clipPath id='4c9e877e206588e7d90196c1a5d91c22__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionXlRegularIcon);
export default ForwardRef;
