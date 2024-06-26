import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyBuysellIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.015 7.533A7 7 0 0 1 14.326 5H12.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.624A8 8 0 0 0 .017 7.467a.5.5 0 0 0 .998.066M15.983 8.533a.5.5 0 0 0-.998-.066A7 7 0 0 1 1.673 11H3.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-1.624a8 8 0 0 0 14.983-3.343' />
      <path
        fillRule='evenodd'
        d='M9.137 5.58a1.9 1.9 0 0 0-.617-.191V4.5h-.955v.91q-.1.02-.198.049-.34.09-.595.283l-.002.001q-.246.196-.39.491-.144.292-.143.673-.001.36.124.632v.002q.135.267.36.452l.004.003q.231.17.53.28h.003q.296.1.647.148l.39.057c.318.05.512.141.61.255l.004.003q.165.172.165.421c0 .229-.081.396-.24.516v.001c-.156.123-.384.19-.696.19q-.447 0-.775-.179a2.1 2.1 0 0 1-.611-.539l-.06-.076L6 9.631l.056.074q.345.455.82.732h.003q.303.168.686.23v.833h.955v-.822q.575-.083.959-.404c.35-.294.521-.698.521-1.2 0-.396-.122-.724-.371-.974-.251-.257-.664-.42-1.22-.505l-.38-.057q-.447-.076-.67-.224c-.125-.086-.195-.226-.195-.446 0-.211.07-.368.205-.48.141-.12.358-.188.664-.188q.457.002.743.177l.002.001q.3.175.447.383l.062.088.654-.592-.058-.07a2.3 2.3 0 0 0-.746-.607'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyBuysellIcon);
export default ForwardRef;
