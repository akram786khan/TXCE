// // import { StyleSheet, Text, TextStyle } from 'react-native';
// import React, { memo } from 'react';
// //import { fonts, fontTypes } from '../../constants/fonts';

// type fontSize = 8 | 10 | 12 | 14 | 16 | 18 | 20 | number;

// type Props = {
//   size?: fontSize;
//   children?: any;
//  // type?: fontTypes;
//   color?: string;
//   textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
//   //style?: TextStyle;
// };

// const Paragraph: React.FC<Props> = ({
//   size = 16,
//   children = '',
//   type = 'regular',
//   color = '#000000',
//   textAlign = 'left',
//   style,
//   ...props
// }) => {
//   const propStyling = {
//     prop: {
//       fontSize: size,
//       color,
//       textAlign,
//     //  fontFamily: fonts(type) || undefined,
//     },
//   };
//   return (
//     <p style={[styles.font, propStyling.prop, style]} {...props}>
//       {children}
//     </p>
//   );
// };

// export default memo(Paragraph);

// const styles = {
//   font: {
//     textAlignVertical: 'center',
//     includeFontPadding: false,
//   },
// };

import React from 'react'

const Paragraph = ({
    size = 16,
  children = '',
  type = 'regular',
  color = '#000000',
  textAlign = 'left',
  style,
  ...props
}) => {
  const propStyling = {
        fontSize: size,
        color,
        textAlign,
        color:'white',
        marginLeft: '20px'
      //  fontFamily: fonts(type) || undefined,
      }
    
  return (
    <div style={{...propStyling,...style}}>{children}</div>
  )
}




export default Paragraph
