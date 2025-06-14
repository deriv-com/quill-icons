import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightXlRegularIcon = (
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
      <path d='M25.031 7.5a.504.504 0 0 0-.468.469v20.11c0 .233.234.421.468.421s.469-.187.469-.422V7.968a.504.504 0 0 0-.469-.468M24 15.75c0 1.594-1.219 2.86-2.766 3L19.5 22.453c.047.094.14.188.188.328l.375.703c.328.657.328 1.407.046 2.063l-.28.562c-.657 1.407-2.063 2.344-3.563 2.391h-.282a4.1 4.1 0 0 1-2.015-.375l-3.61-1.734c-1.64-.75-2.343-2.72-1.546-4.36L9.984 19.5c.47-.937 1.594-1.36 2.532-.89 0 0 .046.046.093.046.047.047.094.047.094.094.563-.375 1.266-.469 1.875-.187.188.046.281.14.422.234.516-.375 1.266-.469 1.922-.188.234.094.422.282.562.422l.844-1.828a2.9 2.9 0 0 1-.375-1.453c0-1.64 1.36-3 3-3 1.688 0 3 1.36 3 3zm-1.969 1.406-.281.563c.797-.282 1.313-1.078 1.313-1.969A2.08 2.08 0 0 0 21 13.688c-1.172 0-2.11.937-2.11 2.062v.328l.141-.328c.375-.797 1.407-1.172 2.203-.797.797.375 1.172 1.406.797 2.203m-4.5 7.219 3.657-7.64c.14-.329 0-.75-.375-.938-.329-.14-.75 0-.938.328l-1.969 4.219c-.093.187-.281.281-.468.234-.235-.047-.375-.187-.422-.375a.98.98 0 0 0-.516-.75c-.375-.187-.89-.047-1.125.328a.6.6 0 0 1-.422.188c-.14 0-.281-.094-.375-.235s-.234-.234-.375-.328a.94.94 0 0 0-1.125.235c-.094.093-.187.187-.328.187-.14 0-.281-.094-.375-.14-.094-.094-.187-.188-.281-.235a1 1 0 0 0-1.266.469l-1.172 2.531c-.562 1.172-.094 2.578 1.078 3.14l3.61 1.688a3.1 3.1 0 0 0 1.594.282l.28.046c1.22-.093 2.25-.843 2.766-1.922l.282-.515c.187-.422.14-.844-.047-1.266l-.235-.422-.609 1.266c-.094.281-.375.375-.61.234-.187-.093-.328-.375-.234-.609' />
    </g>
    <defs>
      <clipPath id='53f3b2cb57f8ce779b540583f60ce37f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightXlRegularIcon);
export default ForwardRef;
