import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ProfileOptionsScreenProps } from '../types/navigator.type'
import { baseStyles } from '../styles'
import { useAuthContext } from '../contexts/AuthContext'

const ProfileOptionsScreen = (
  { navigation }: ProfileOptionsScreenProps
) => {

  const { user } = useAuthContext()
  return (
    <View
      style={[
        baseStyles.centerContainer,
      ]}
    >
      <View
        style={[
          baseStyles.innerCenterContainer,
          {
            alignItems: 'center',
            paddingTop: 20,
            gap: 12
          }
        ]}

      >
        {user?.profilePhoto && (
          <Image
            source={{ uri: user?.profilePhoto }}
            style={{
              width: 100,
              aspectRatio: 1,
              borderRadius: 50,
            }}
          />
        )}
        <View
          style={{
            alignItems: 'center',
            gap: 8,
            width: '100%',
          }}
        >
          <Text>
            {user?.username}
          </Text>
          {user?.mahasiswa && (
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View style={styles.containerSeparator}>
                <Text>
                  {user?.mahasiswa?.kelas?.name}
                </Text>
                <Text>
                  {user?.mahasiswa?.angkatan?.tahun}
                </Text>
              </View>
              <View style={styles.containerSeparator}>
                <Text>
                  {user?.mahasiswa?.konsentrasi?.name}
                </Text>
                <Text>
                  {user?.mahasiswa?.prodi?.name}
                </Text>
              </View>
            </View>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={[
              baseStyles.primaryButton,
            ]}
          >
            <Text
              style={
                baseStyles.textButton
              }
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileOptionsScreen

const styles = StyleSheet.create({
  containerSeparator: {
    alignItems: 'center',
    gap: 12,
    flexDirection: 'row',

  }
})