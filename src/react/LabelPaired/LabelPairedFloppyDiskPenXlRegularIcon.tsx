import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenXlRegularIcon = (
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
      <path d='M1.5 10.5v15c0 .844.656 1.5 1.5 1.5h9.469l-.375 1.5H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h11.484c.797 0 1.547.328 2.11.89l3.515 3.516c.563.563.891 1.313.891 2.11v2.343l-1.5 1.5v-3.843c0-.422-.187-.797-.469-1.078l-3.468-3.47c-.188-.187-.376-.28-.563-.374V13.5c0 .844-.703 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 3 13.5V9c-.844 0-1.5.703-1.5 1.5m3-1.5v4.5h9V9zm3.75 12c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C8.672 19.5 8.25 20.203 8.25 21m2.25 3.75c-1.36 0-2.578-.703-3.281-1.875-.657-1.125-.657-2.578 0-3.75C7.922 18 9.14 17.25 10.5 17.25c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75-.703 1.172-1.921 1.875-3.234 1.875m13.781-6.328a.663.663 0 0 0-1.031 0l-1.172 1.125 1.875 1.875 1.172-1.125c.281-.328.281-.797 0-1.078zm-8.25 7.172c-.093.093-.14.234-.187.375l-.563 2.297 2.297-.61c.094 0 .235-.093.328-.187l4.969-4.969L21 20.625zm6.14-8.25c.892-.89 2.298-.89 3.188 0l.797.797c.89.89.89 2.297 0 3.187l-7.172 7.219a3.1 3.1 0 0 1-1.078.61L14.391 30c-.235.094-.516 0-.703-.187-.188-.188-.235-.47-.188-.704l.89-3.515c.094-.375.282-.75.563-1.032z' />
    </g>
    <defs>
      <clipPath id='322b64e1f3fc79977464652362015ef6__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlRegularIcon);
export default ForwardRef;
