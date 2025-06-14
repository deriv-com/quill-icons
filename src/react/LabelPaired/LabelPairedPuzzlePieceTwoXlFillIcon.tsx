import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoXlFillIcon = (
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
      <path d='M12 7.875c.469 0 .844.188 1.125.469.234.281.375.656.469 1.078v.14l-.094.141c-.375.422-.094 1.172.516 1.172h1.968c.47 0 .891.14 1.22.375a.9.9 0 0 1 .421.75v7.172h-3.469l.094-.422c0-.047.047-.14 0-.187-.047-.61-.234-1.22-.656-1.641-.375-.469-.938-.75-1.64-.75-.657 0-1.22.281-1.642.75-.374.422-.562 1.031-.609 1.64v.188l.094.422H6.328V18c0-.094 0-.422-.047-.703 0-.14-.047-.328-.093-.469-.047-.094-.094-.281-.235-.375a.76.76 0 0 0-.422-.14c-.093.046-.187.046-.234.093-.047 0-.094.047-.094.047l-.094.047h-.093c-.516-.047-.938-.234-1.22-.469-.28-.234-.468-.61-.468-1.078 0-.234.047-.422.14-.61.095-.187.188-.327.329-.421.281-.188.703-.328 1.219-.375h.093l.094.047s.047 0 .094.047c.047 0 .14.046.234.093q.211 0 .422-.14c.14-.094.188-.281.234-.422s.094-.281.094-.422c.047-.281.047-.61.047-.703V12c0-.281.14-.562.469-.75.281-.234.703-.375 1.172-.375h1.968c.61 0 .938-.75.563-1.172l-.14-.14.046-.141a2.06 2.06 0 0 1 .469-1.078c.234-.281.61-.469 1.125-.469m-.047 9c.516 0 .89.188 1.172.469.234.281.375.656.469 1.078v.14l-.094.141c-.375.422-.094 1.172.516 1.172h3.609v2.015c0 .61.703.891 1.172.516l.094-.093.187.046c.422.047.797.188 1.078.422.282.282.469.657.469 1.172 0 .469-.187.844-.469 1.125-.281.235-.656.375-1.078.469h-.187l-.094-.094c-.469-.375-1.172-.094-1.172.516v1.078a.9.9 0 0 1-.422.75 2.1 2.1 0 0 1-1.219.375h-1.828l.094-.422c0-.047.047-.14 0-.187-.047-.61-.234-1.22-.656-1.641-.375-.469-.938-.75-1.64-.75-.657 0-1.22.281-1.642.75-.374.422-.562 1.031-.609 1.64v.188l.094.422H7.969c-.469 0-.89-.14-1.219-.375-.281-.235-.422-.516-.422-.797v-7.125h3.61c.609 0 .937-.75.562-1.172l-.14-.094.046-.187c.047-.422.188-.797.422-1.078a1.55 1.55 0 0 1 1.125-.469' />
    </g>
    <defs>
      <clipPath id='a28278b18f5602eb9c81908a3e8353b0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoXlFillIcon);
export default ForwardRef;
