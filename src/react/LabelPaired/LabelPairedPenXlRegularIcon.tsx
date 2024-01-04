import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m18.563 7.875-2.579 2.531 3.61 3.61 2.531-2.579c.438-.53.438-1.062 0-1.593l-1.969-1.969c-.531-.438-1.062-.438-1.593 0Zm-3.657 3.61L3.891 22.5a3.43 3.43 0 0 0-.75 1.313l-1.266 4.312 4.313-1.266c.5-.156.937-.406 1.312-.75l11.016-11.015-3.61-3.61Zm6.281-4.688 2.016 2.016c.5.53.75 1.14.75 1.828 0 .718-.25 1.343-.75 1.875L8.531 27.14a4.242 4.242 0 0 1-1.875 1.172l-5.672 1.64c-.312.094-.562.031-.75-.187-.218-.188-.28-.422-.187-.703l1.64-5.672c.22-.75.594-1.391 1.125-1.922L17.485 6.797c.532-.5 1.157-.75 1.875-.75.688 0 1.297.25 1.828.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlRegularIcon);
export default ForwardRef;
